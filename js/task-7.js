"use strict";
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const transactionObj = {
      amount: amount,
      type: type
    };
    return transactionObj;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(newTransaction);
    console.log(this.balance);
    console.log(this.transactions);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(newTransaction);
    if (amount > this.balance) {
      console.log("снятие такой суммы не возможно, недостаточно средств ");
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (i === id) {
        return this.transactions[i];
      } else {
        console.log("транзакции с таким id не найдено!");
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let totalTransaction = 0;

    for (const item of this.transactions) {
      for (const keys in item) {
        if (item[keys] === type) {
          const { amount } = item;
          totalTransaction += amount;
        }
      }
    }

    return totalTransaction;
  }
};

/*
 *проверка
 */
console.log(account.createTransaction(1200, "deposit"));
console.log(account.deposit(1200));
console.log(account.deposit(150));
console.log(account.getBalance());
console.log(account.withdraw(100));
console.log(account.withdraw(50));
console.log(account.withdraw(10000));
console.log(account.getBalance());
console.log(account.getTransactionDetails(0));
console.log(account.getTransactionDetails(1));
console.log(
  "всего положено средств: ",
  account.getTransactionTotal(Transaction.DEPOSIT)
);
console.log(
  "всего снято средств: ",
  account.getTransactionTotal(Transaction.WITHDRAW)
);
