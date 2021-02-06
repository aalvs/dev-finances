const Modal = {
    toggleModal() {
        document
        .querySelector('.modal-overlay')
        .classList.toggle('active');
    },
    
    // open() { 
    //     document
    //     .querySelector('.modal-overlay')
    //     .classList.add('active');
    // }

    // close() { 
    //     document
    //     .querySelector('.modal-overlay')
    //     .classList.remove('active');
    // }
}

const transactions = [ 
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 2,
        description: 'Criação de website',
        amount: 500000,
        date: '23/01/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021',
    },
    {
        id: 4,
        description: 'App',
        amount: 50000,
        date: '23/01/2021',
    }
]
    
const Transaction = {
    all: transactions,

    add(transaction) {
        Transaction.all.push(transaction);
        App.reload();
    },

    remove(index) {
        Transaction.all.splice(index, 1);
        App.reload();
    },

    incomes() {
        let income = 0;

        Transaction.all.forEach((transaction) => {
            if (transaction.amount > 0) {
                income += transaction.amount
            }
        })
        return income; 
    },

    expenses() {
        let expense = 0;

        Transaction.all.forEach((transaction) => {
            if (transaction.amount < 0) {
                expense += transaction.amount
            }
        })
        return expense;
    },

    total() {
        let total = Transaction.incomes() + Transaction.expenses();
        return total;
    }
}

// Document Object Model
const DOM = { 
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        console.log(transaction)
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTransaction(transaction, index);

        DOM.transactionsContainer.appendChild(tr);
    },

    innerHTMLTransaction(transaction, index) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense";

        const amount = Utils.formatCurrency(transaction.amount)

        const html = ` 
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img src="../assets/minus.svg" alt="">
        </td>
        `
        return html
    },

    updateBalance() {
        document.getElementById('incomeDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.incomes());

        document.getElementById('expenseDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.expenses());

        document.getElementById('totalDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.total());
    },
    cleaTransactions() {
        DOM.transactionsContainer.innerHTML = ""
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : "";

        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        })
        return signal + value
    }
}

const Form = {
    submit(e) {
        e.preventDefault();

        
    }
}

const App = {
    init() {

        // DOM.addTransaction(transactions[0]);
        // DOM.addTransaction(transactions[1]);
        // DOM.addTransaction(transactions[2]);

        Transaction.all.forEach((transaction) => {
            DOM.addTransaction(transaction);
        })

        DOM.updateBalance();
    },
    reload() {
        DOM.cleaTransactions();
        App.init();
    }
}

App.init();

