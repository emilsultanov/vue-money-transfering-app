import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    balance: 1000,
    isWarningModalVisible: false,
    contacts: [
      {
        id: 1,
        name: "User-1",
      },
      {
        id: 2,
        name: "User-2",
      },
      {
        id: 3,
        name: "User-3",
      },
      {
        id: 4,
        name: "User-4",
      },
      {
        id: 5,
        name: "User-5",
      },
    ],
    transactions: [],
  },
  getters: {
    getSumOfTransactionsByContactId: (state) => (contactId) => {
      let transactionsById = state.transactions.filter(
        (transaction) => transaction.contactId === contactId
      );
      let sumOfTransactions = transactionsById.reduce(
        (previousValue, currentValue) => {
          previousValue += currentValue.amount;
          return previousValue;
        },
        0
      );
      return sumOfTransactions;
    },
  },
  mutations: {
    updateBalance(state, amount = 0) {
      state.balance -= amount;
    },
    updateTransactions(state, { contactId, amount, name }) {
      state.transactions = [
        ...state.transactions,
        {
          amount,
          contactId,
          date: new Date(),
          contactName: name,
          id: state.transactions.length + 1,
        },
      ];
    },
  },
  actions: {},
  modules: {},
});
