import React from 'react';
import * as Flex from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';

import { MyTheme } from './components/MyTheme';
import { Panel2 } from './components/Panel2';

const PLUGIN_NAME = 'FlexCrmPanelsPlugin';

export default class FlexCrmPanelsPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  async init(flex: typeof Flex, manager: Flex.Manager): Promise<void> {
    flex.AgentDesktopView.Panel2.Content.replace(
      <MyTheme key="MyTheme">
        <Panel2 />
      </MyTheme>
    );
  }
}
