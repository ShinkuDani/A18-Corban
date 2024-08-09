export interface clienteLiteInterface {
  'accountCode': string
  'customerId': string
  'name': string
  'nickname': string
  'birthDate': string
  'phone':string
  'motherName': string
  'fatherName': string
  'nationality': string
  'note': string
  'addresses': [{
    'street': string
    'number': string
    'complement': string
    'district': string
    'city': string
    'state': string
    'zipCode': string
    'note': string
  }]
    'emails':[ {
      'email': string
      'note': string
    }]
    'phones': [{
    'ddd': number
    'number': number
    'note': string
    }]
  }

export interface clienteLiteInterfacePhone {
  'ddd': number
    'number': number
    'note': string
}
  