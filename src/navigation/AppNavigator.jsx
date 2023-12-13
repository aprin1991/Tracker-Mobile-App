import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllExpenses from '../screens/AllExpenses';
import ManageExpense from '../screens/ManageExpense';
import RecentExpenses from '../screens/RecentExpenses';
import { GlobalStyles } from '../constants/style';
import { Ionicons } from '@expo/vector-icons';
import IconButton from '../components/UI/IconButton';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
const ExpensesOverview = () => {
  const navigation = useNavigation();
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon='add'
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('ManageExpense');
            }}
          />
        ),
      }}
    >
      <BottomTabs.Screen
        name='RecentExpenses'
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='hourglass' size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name='AllExpenses'
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name='ExpensesOverview'
        component={ExpensesOverview}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='ManageExpense'
        component={ManageExpense}
        options={{ title: 'Manage Expense', presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
