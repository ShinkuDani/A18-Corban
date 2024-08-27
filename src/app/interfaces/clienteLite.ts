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
    'documentId': string | undefined
      'typeCode': number | undefined
      'number': string |undefined
      'category': string | undefined
      'issuingDate': string | undefined
      'expirationDate': string | undefined
      'issuingEntity': string |undefined
      'issuingState': string | undefined
      'issuingCountry': string | undefined
      'securityCode': string | undefined
      'statusCode': number | undefined
      'statusNote': string | undefined
      'files': number | undefined
}

export interface bankAccounts {
  'bankAccountId': string | undefined
      'description': string | undefined
      'typeCode': number | undefined
      'statusCode': number | undefined
      'statusNote': string | undefined
      'bankCode': string | undefined
      'bankName': string | undefined
      'branchCode': string | undefined
      'accountNumber': string | undefined
      'personTypeCode': number | undefined
      'countryIdentity': string | undefined
      'holderName': string | undefined
      'startDate': string | undefined
      'note': string | undefined
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
  