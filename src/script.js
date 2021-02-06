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
        amount: 5000000,
        date: '23/01/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: 20000,
        date: '23/01/2021',
    }
]
    
const Transaction = {
    incomes() {

    },
    expenses() {

    },
    total() {

    }
}

// Document Object Model
const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction, index)

        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction, index) {
        
        const html = ` 
        <td class="description">${transaction.description}</td>
        <td class="expense">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img src="../assets/minus.svg" alt="">
        </td>
        `
        return html
    }

}

transactions.forEach(function (transaction) {
    DOM.addTransaction(transactions)
})