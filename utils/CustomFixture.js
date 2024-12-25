import { mergeTests } from "@playwright/test";
import {test as pageObjects} from './../pages/POManager/POManager';
import {test as testdata} from './../testData/TestDataFixture/TestDataFixture'

export const test = mergeTests(pageObjects,testdata);