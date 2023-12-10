import React from 'react';
import { Text, View } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

const AllExpenses = () => {
  return (
    <View>
      <ExpensesOutput expensesPeriod={'Total'} expenses={[]} />
    </View>
  );
};

export default AllExpenses;
