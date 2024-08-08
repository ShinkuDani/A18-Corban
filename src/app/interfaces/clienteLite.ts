export interface clienteLiteInterface {
    'accountCode': string
    'customerId': string
    'name': string
    'nickname': string
    'motherName': string
    'fatherName': string
    'naturalness': string
    'nationality': string
    'addresses': {
        'typeCode': number
        'typeName': string
        'street': string
        'number': string
        'complement': string
        'district': string
        'city': string
        'state': string
        'zipCode': string
        'note': string
        'statusCode': number
        'statusName': string
      }
      'phones': {
        'typeCode': number
        'typeName': string
        'countryCode': number
        'ddd': number
        'number': number
        'note': string
        'statusCode': number
        'statusName': string
        'statusDate': string
        'statusColor': string
        'statusNote': string
        'primaryPhone': boolean
      }
  }

  