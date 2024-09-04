export interface clienteLiteInterface {
  'accountCode': string| undefined
  'customerId': string| undefined
  'name': string| undefined
  'nickname': string| undefined
  'birthDate': string| undefined
  'motherName': string| undefined
  'fatherName': string| undefined
  'nationality': string|undefined
  'naturalnessState': string| undefined
  'naturalness': string| undefined
  'note': string| undefined
  'addresses': addresses[]
    'emails': email[]
    'phones': phone[]
    'document': document[]
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
    'benefitId': string | undefined
      'typeCode': number | undefined
      'number': string | undefined
      'code': string | undefined
      'description': string | undefined
      'value': number | undefined
      'netValue': number | undefined
      'marginValue': number | undefined
      'issuingDate': string | undefined
      'startDate': string | undefined
      'loanEligible': boolean | undefined
      'issuingState': string | undefined
      'issuingCountry': string | undefined
      'securityCode': string | undefined
      'statusCode': number | undefined
      'statusNote': string | undefined
      'paymentMethodCode': number | undefined
      'paymentMethodName': string | undefined
      'note': string | undefined
}
  