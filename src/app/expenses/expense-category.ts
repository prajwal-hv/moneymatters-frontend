export const EXPENSE_CATEGORIES = [
  'HOUSING',
  'BILLS',
  'SUBSCRIPTIONS',
  'TRANSPORT',
  'GROCERIES',
  'FOOD_OUT',
  'SHOPPING',
  'ELECTRONICS',
  'ENTERTAINMENT',
  'TRAVEL',
  'OTHERS'
] as const;

export type ExpenseCategory = typeof EXPENSE_CATEGORIES[number];
