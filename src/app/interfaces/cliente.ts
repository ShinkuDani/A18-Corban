export interface clienteInterface {
    'accountCode': string
    'customerId': string
    'parentTypeCode': number
    'parentId': string
    'parentCode': number
    'parentName': string
    'typeCode': number
    'typeName': string
    'name': string
    'nickname': string
    'displayValue': string
    'birthDate': string
    'personTypeCode': number
    'personTypeName': string
    'countryIdentity': string
    'sexTypeCode': number
    'sexTypeName': string
    'maritalStatusCode': number
    'maritalStatusName': string
    'weddingDate': string
    'spouseCountryIdentity': string
    'spouseName': string
    'motherName': string
    'fatherName': string
    'educationLevelCode': number
    'educationLevelName': string
    'homeConditionCode': number
    'homeConditionName': string
    'homeOccupationDate': string
    'naturalness': string
    'naturalnessState': string
    'nationality': string
    'countryOrigin': string
    'profession': string
    'role': string
    'admissionDate': string
    'grossIncome': number
    'netIncome': number
    'otherIncome': number
    'equityValue': number
    'paymentDay': number
    'monthlyBilling': number
    'annualBilling': number
    'externalCode': string
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
    'emails': {
      'typeCode': number
      'email': string
      'note': string
      'statusCode': number
    }
    'sites': {
      'typeCode': number
      'typeName': string
      'url': string
      'note': string
    }
    'documents': {
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
    'bankAccounts': {
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
    'benefits': {
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
    'fields': {
      'key': string
      'label': string
      'dataType': string
      'value': string
      'values': string[]
    }
    'statusCode': number
    'statusName': string
    'statusDate': string
    'statusColor': string
    'statusNote': string
    'alertCode': number
    'alertName': string
    'alertDate': string
    'alertColor': string
    'alertNote': string
    'storeId': string
    'brokerId': string
    'campaignId': string
    'originTypeCode': number
    'originCode': number
    'inputTypeCode': number
    'tags': {
      'id': string
      'code': number
      'name': string
      'color': string
      'note': string
    }
    'properties': {
      'id': string
      'type': string
      'key': string
      'label': string
      'value': string
      'values': string[]
      'display': string
      'dataType': string
      'properties': string[]
    }
    'score': string
    'leadId': string
    'importId': string
    'note': string
    'draft': boolean
    'event': {
      'code': number
      'name': string
    }
  }

  