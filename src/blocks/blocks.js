/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from "blockly/core";
import { contexts } from "./contexts";
import { operations } from "./operation";
import { corps } from "./corps";
import { entrees } from "./entrees";
import { logic } from "./logic";

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(
  contexts.concat(operations, corps, entrees, logic)
);
