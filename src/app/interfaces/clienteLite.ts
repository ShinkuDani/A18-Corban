export interface clienteLiteInterface {
  'accountCode': string
  'customerId': string
  'name': string
  'nickname': string
  'birthDate': string
  'motherName': string
  'fatherName': string
  'nationality': string
  'note': string
  'addresses': addresses[]
    'emails':email[]
    'phones': phone[]
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
  