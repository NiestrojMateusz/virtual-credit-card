# Virtual Card
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

# IBAN Validation

Overview
Enable the user to explore IBAN details or provide feedback when the IBAN is invalid.

Acceptance criteria
1. Create a page with the form:
- IBAN input field
- Validate button


2. Send IBAN to the API
   When the user submits the form


3. Display valid IBAN details
- Validation states (based on flags from API response)
- - "Valid IBAN" when the response is successful
- - "Trusted bank" when bank.trustScore is over 7
- - "Accepts instant payments" when flags include INSTANT
- - "Positive operation history" when flags include POSITIVE_HISTORY
- - "No security claims" when flags miss SECURITY_CLAIMS
- - "Complies with Payment Services Directive (PSD2)" when flags include PSD2


4. Display invalid state when IBAN is invalid
- - When API throws — the IBAN is invalid
- - When a response is successful, the given IBAN is valid.

Design
Successful IBAN validation
![img_2.png](img_2.png)

Invalid IBAN
![img_3.png](img_3.png)

API specification
The validation is created via GET /validate endpoint.

Expected request:

Attribute	Type
iban	string
Response:

Attribute	Type
iban	string
flags	enum[]
INSTANT | POSITIVE_HISTORY | SECURITY_CLAIMS | PSD2
bank?.trustScore?	number(0-10)
Test data
- AT0309000000000019176655
- RO23INGB0001000000000222
- CZ3608000000002996530173

5. Display formatted IBAN
- Insert space after every 4th character
- Example:
- - Pure: AT0309000000000019176655
- - Formatted: AT03 0900 0000 0000 1917 6655

6. Overview
Provide the user with feedback when the IBAN is missing.

    Acceptance criteria
    1. Display validation message when IBAN is missing
