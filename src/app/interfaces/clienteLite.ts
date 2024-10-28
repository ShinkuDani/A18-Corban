export interface clienteLiteInterface {
  'accountCode': string
  'customerId': string
  'name': string
  'nickname': string
  'birthDate': string
  'motherName': string
  'fatherName': string
  'nationality': string
  'naturalnessState': string
  'naturalness': string
  'note': string
  'addresses': addresses[]
  'emails': email[]
  'phones': phone[]
  'documents': document[]
  'bankAccounts': bankAccounts[]
  'benefits': benefits[]
  }

export interface phone {
    'ddd': number
    'number': number
    'note': string
}

export interface email {
    'email': string
    'note': string
}

export interface addresses {
    'street': string
    'number': string
    'complement': string
    'district': string
    'city': string
    'state': string
    'zipCode': string
    'note': string
}

export interface document {
      'documentId': string 
      'typeCode': number 
      'number': string 
      'category': string 
      'issuingDate': string 
      'expirationDate': string 
      'issuingEntity': string 
      'issuingState': string 
      'issuingCountry': string 
      'securityCode': string 
      'statusCode': number 
      'statusNote': string 
      'files': number
}

export interface bankAccounts {
      'bankAccountId': string 
      'description': string 
      'typeCode': number 
      'statusCode': number 
      'statusNote': string 
      'bankCode': string 
      'bankName': string 
      'branchCode': string 
      'accountNumber': string 
      'personTypeCode': number 
      'countryIdentity': string 
      'holderName': string 
      'startDate': string 
      'note': string
}

export interface benefits {
    'benefitId': string 
      'typeCode': number 
      'number': string 
      'code': string 
      'description': string 
      'value': number 
      'netValue': number 
      'marginValue': number 
      'issuingDate': string 
      'startDate': string 
      'loanEligible': boolean 
      'issuingState': string 
      'issuingCountry': string 
      'securityCode': string 
      'statusCode': number 
      'statusNote': string 
      'paymentMethodCode': number 
      'paymentMethodName': string 
      'note': string 
}
  