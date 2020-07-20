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
      type: type,
      id: this.transactions.length + 1
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
    const erorMessage = "снятие такой суммы не возможно, недостаточно средств!";
    if (amount < this.balance) {
      const newTransaction = this.createTransaction(
        amount,
        Transaction.WITHDRAW
      );
      this.transactions.push(newTransaction);
    } else {
      return erorMessage;
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
    const erorMessage = "транзакции с таким id не найдено!";

    for (const item of this.transactions) {
      const { id: objId } = item;
      if (objId === id) {
        return item;
      }
    }
    return erorMessage;
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

console.log(
  "всего положено средств: ",
  account.getTransactionTotal(Transaction.DEPOSIT)
);
console.log(
  "всего снято средств: ",
  account.getTransactionTotal(Transaction.WITHDRAW)
);

console.log(account.getTransactionDetails(1));
console.log(account.getTransactionDetails(0));
console.log(account.getTransactionDetails(3));
console.log(account.transactions);
