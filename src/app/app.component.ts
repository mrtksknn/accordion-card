import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  faqs: any[] = [
    {
      isOpen: true,
      question: 'What is Frontend Mentor, and how will it help me?',
      answer: 'Frontend Mentor offers realistic coding challengess to help developers improve their frontend coding skills with projects in HTNL, CSS and Javascript. It is suitable for all levels and ideal for portfolio building.'
    },
    {
      question: 'Is Frontend Mentor free?',
      answer: 'Frontend Mentor offers realistic coding challengess to help developers improve their frontend coding skills with projects in HTNL, CSS and Javascript. It is suitable for all levels and ideal for portfolio building.'
    },
    {
      question: 'Can I use Frontend Mentor projects in my Portfolio?',
      answer: 'Frontend Mentor offers realistic coding challengess to help developers improve their frontend coding skills with projects in HTNL, CSS and Javascript. It is suitable for all levels and ideal for portfolio building.'
    },
    {
      question: 'How can I get help if I am stuck on a chanllenge?',
      answer: 'Frontend Mentor offers realistic coding challengess to help developers improve their frontend coding skills with projects in HTNL, CSS and Javascript. It is suitable for all levels and ideal for portfolio building.'
    }
  ]

  toggleAnswer(index: number): void {
    this.faqs = this.faqs.map((faq, i) => ({
      ...faq,
      isOpen: i === index ? !faq.isOpen : false
    }));
  }
}
