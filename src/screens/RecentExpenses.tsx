import React from 'react';
import { Text, View } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

const RecentExpenses = () => {
  return (
    <View>
      <ExpensesOutput expensesPeriod={'Last 7 Days'} expenses={[]} />
    </View>
  );
};

export default RecentExpenses;
