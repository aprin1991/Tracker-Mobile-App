import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllExpenses from "../screens/AllExpenses";
import ManageExpense from "../screens/ManageExpense";
import RecentExpenses from "../screens/RecentExpenses";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AllExpenses" component={AllExpenses} />
      <Tab.Screen name="RecentExpenses" component={RecentExpenses} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} />
      <Stack.Screen name="ManageExpense" component={ManageExpense} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
