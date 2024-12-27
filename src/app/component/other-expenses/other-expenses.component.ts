import { Component } from '@angular/core';

@Component({
  selector: 'app-other-expenses',
  standalone: true,
  imports: [],
  templateUrl: './other-expenses.component.html',
  styleUrl: './other-expenses.component.scss',
})
export class OtherExpensesComponent {
  invoices = [
    {
      submitDate: '2024-08-15',
      number: '123123',
      amount: 4000.05,
      vendor: 'Testing',
      provider: 'Node Provider',
      project: 'Node Project',
      description: 'This is a test invoice',
      isSRED: 'Yes',
      province: 'ON',
      status: 'In Progress',
    },
    {
      submitDate: '2024-09-10',
      number: '5',
      amount: 0,
      vendor: 'Test 123',
      provider: 'Server Provider',
      project: 'Server Project',
      description: 'Another test invoice',
      isSRED: 'Yes',
      province: 'BC',
      status: 'In Progress',
    },
  ];

  get totalAmount(): number {
    return this.invoices.reduce(
      (sum, invoice) => sum + Number(invoice.amount),
      0
    );
  }

  editInvoice(invoice: any): void {
    console.log('Edit invoice:', invoice);
    // Add your edit logic here
  }

  deleteInvoice(invoice: any): void {
    console.log('Delete invoice:', invoice);
    this.invoices = this.invoices.filter((inv) => inv !== invoice);
  }
}
