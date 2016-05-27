'use strict'

import dispatcher from '../dispatcher';
import partial from 'lodash/partial';
import { first } from './first';

// The action identifier...
export const SECOND = 'SECOND';

export const second = partial(first, 'd', 'e', 'f');
