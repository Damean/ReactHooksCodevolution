import React from 'react';
import HookCounter from './components/HookCounterUseState';
import HookCounterPreviousState from './components/HookCounterUseStatePreviousState';
import HookCounterObject from './components/HookCounterUseStateObject';
import HookCounterArray from './components/HookCounterUseStateArray';
import HookCounterUseEffect from './components/HookCounterUseEffect';
import HookCounterUseEffectConditional from './components/HookCounterUseEffectConditional';
import HookMouseUseEffectCleanup from './components/HookMouseUseEffectCleanup';
import HookIntervalCounter from './components/HookIntervalCounterUseEffect';
import DataFetching from './components/DataFetchingUseEffect';
import FirstLevel from './components/ContextNoHooks/FirstLevel';
import FirstLevelUsingHooks from './components/ContextUsingHooks/FirstLevel';
import SimpleCounter from './components/UseReducerExamples/SimpleCounter';
import ComplexCounter from './components/UseReducerExamples/ComplexCounter';
import MultipleReducers from './components/UseReducerExamples/MultipleReducers';
import RootLevel from './components/ReducerPlusContext/RootLevel';
import DataFetchingUsingState from './components/FetchingDataUsingContextAndReducers/DataFetchingUsingState';
import DataFetchingUsingReducer from './components/FetchingDataUsingContextAndReducers/DataFetchingUsingReducer';
import BaseComponent from './components/ReactMemoAndUseCallback/BaseComponent';
import PerformanceOptimizationUseMemo from './components/ReactMemoAndUseCallback/PerformanceOptimizationUseMemo';
import InputFocusUseRef from './components/InputFocusUseRef';
import HookIntervalUseRef from './components/HookIntervalUseRef';
import DocTitleOne from './components/CustomHooks/DocTitleOne';
import DocTitleTwo from './components/CustomHooks/DocTitleTwo';
import CounterOne from './components/CustomHooks/CounterOne';
import CounterTwo from './components/CustomHooks/CounterTwo';
import InputFieldsWithCustomHooks from './components/CustomHooks/InputFieldsWithCustomHooks';

function App() {
  return (
    <div className="App">
      <HookCounter></HookCounter>
      <hr/>
      <HookCounterPreviousState></HookCounterPreviousState>
      <hr/>
      <HookCounterObject></HookCounterObject>
      <hr/>
      <HookCounterArray/>
      <hr/>
      <HookCounterUseEffect></HookCounterUseEffect>
      <hr/>
      <HookCounterUseEffectConditional></HookCounterUseEffectConditional>
      <hr/>
      <HookMouseUseEffectCleanup/>
      <hr/>
      <HookIntervalCounter></HookIntervalCounter>
      <hr/>
      <DataFetching></DataFetching>
      <hr/>
      <FirstLevel></FirstLevel>
      <hr/>
      <FirstLevelUsingHooks></FirstLevelUsingHooks>
      <hr/>
      <SimpleCounter></SimpleCounter>
      <hr/>
      <ComplexCounter></ComplexCounter>
      <hr/>
      <MultipleReducers></MultipleReducers>
      <hr/>
      <RootLevel></RootLevel>
      <hr/>
      <DataFetchingUsingState></DataFetchingUsingState>
      <hr/>
      <DataFetchingUsingReducer></DataFetchingUsingReducer>
      <hr/>
      <BaseComponent></BaseComponent>
      <hr/>
      <PerformanceOptimizationUseMemo></PerformanceOptimizationUseMemo>
      <hr/>
      <InputFocusUseRef></InputFocusUseRef>
      <hr/>
      <HookIntervalUseRef></HookIntervalUseRef>
      <hr/>
      <DocTitleOne></DocTitleOne>
      <DocTitleTwo></DocTitleTwo>
      <hr/>
      <CounterOne></CounterOne>
      <CounterTwo></CounterTwo>
      <hr/>
      <InputFieldsWithCustomHooks></InputFieldsWithCustomHooks>
      <br/>
    </div>
  );
}

export default App;
