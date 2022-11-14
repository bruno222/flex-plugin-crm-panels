import { Box, Button, Separator } from '@twilio-paste/core';
import { withTheme, withTaskContext, Manager } from '@twilio/flex-ui';
import { useEffect, useState } from 'react';

interface Props {
  task?: Task;
}

interface PanelTab {
  name: string;
  url: string;
}

interface Task {
  attributes: {
    tabs?: PanelTab[];
  };
  sid: string;
}

export const Panel2 = withTaskContext(({ task }: Props) => {
  if (!task) {
    return null;
  }

  const { attributes, sid } = task;

  // Abort in case the attributes are not defined
  if (!attributes || !attributes.tabs || attributes.tabs.length === 0) {
    return null;
  }
  const { tabs } = attributes;

  //   const tabs: PanelTab[] = [
  //     { name: '🗄 CRM', url: 'https://www.bing.com/search?q=crm' },
  //     { name: '🙅‍♂️ Impersonation', url: 'https://www.bing.com/search?q=Impersonation' },
  //   ];

  const [selected, setSelected] = useState<PanelTab>(tabs[0]);

  const selectPanel = (tab: PanelTab) => () => {
    setSelected(tab);
  };

  useEffect(() => {
    console.log('@@@ refreshed', sid);
    setSelected(tabs[0]);
  }, [tabs]);

  return (
    <Box>
      <Box height="5.5rem" padding="space40" display="flex" justifyContent="space-evenly">
        {tabs.map((tab) => {
          const isSelected = tab.name === selected.name;
          return (
            <Box display="flex" alignItems="center" key={`btn-${tab.name}`}>
              <Button variant="primary" onClick={selectPanel(tab)} disabled={isSelected}>
                {tab.name}
              </Button>
            </Box>
          );
        })}
      </Box>
      <Separator orientation="horizontal" />
      <Box padding="space40" key={`box-${selected.name}`}>
        <iframe src={selected.url} width="100%" height="800px" key={`iframe-${sid}-${selected.url}`}></iframe>
      </Box>
    </Box>
  );
});
