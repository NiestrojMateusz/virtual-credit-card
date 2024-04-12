Overview
Enable the customer to create a virtual credit card.

Acceptance criteria
1. Create a new page for card creation and display:
- With the "Create new card" button


2. Create a new item within the main navigation
- With the name "Virtual card"
- Navigates to the new page


3. Display a new card below the button
- Ask VISA SDK to create a new card
  (see integration specification)
- Display the card below the button
    - Card number formatted with a space after every 4th digit
      1234 5678 9011 1213
    - Card due date formatted as MM/YY
      05/25


4. Display important information below the card
- When the user submits the form

Important
Virtual card is for a single use only (e.g., for secure online shopping). It is automatically destroyed after successful purchase.

Design
New menu item
![img.png](img.png)

New page
![img_1.png](img_1.png)

Integration specification
The card is created by VISA SDK. It's already used somewhere else within our app. We just have to call a specific function they provide.

Copy/pasting details from their documentation:

Public interfaces
export function createVirtualCreditCard(): Promise<CreditCard>;

export type CreditCard = {
id: number;
holder: string;
expiry: Date;
cvc: number;
color?: string;
};
Usage
import { createVirtualCreditCard, CreditCard } from 'visa-client';

const card: CreditCard = await createVirtualCreditCard();
Output sample
{
"id": 1234567890111213,
"holder": "Nik Sumeiko",
"expiry": 2025-05-21T15:27:03.885Z,
"cvc": 123,
"color": "red"
}
