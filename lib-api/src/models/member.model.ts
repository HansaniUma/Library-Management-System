import {Entity, model, property} from '@loopback/repository';

@model()
export class Member extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  memId?: number;

  @property({
    type: 'string',
    required: true,
  })
  membName: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
    required: true,
  })
  contactNo: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'date',
    required: true,
  })
  memExpDate: string;


  constructor(data?: Partial<Member>) {
    super(data);
  }
}

export interface MemberRelations {
  // describe navigational properties here
}

export type MemberWithRelations = Member & MemberRelations;
