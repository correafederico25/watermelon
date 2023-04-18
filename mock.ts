export default {
  success: true,
  message: 'Event detail',
  data: {
    id: '90',
    venue_id: '12',
    name: 'Chicago vs Bulls',
    held_on: '2023-04-11T23:00:00.000Z',
    created_at: '2023-04-10T13:55:01.000Z',
    updated_at: '2023-04-11T15:02:19.000Z',
    allow_registrations_at: '2023-04-11T12:00:00.000Z',
    venue: {
      id: '12',
      name: 'Standoford Stadium',
      check_workplace_id: 'wrk_m77VHFktE1wOdJbvs8RB',
      account_id: '12',
      account: {
        id: '12',
        name: 'TEST account 3 -  Lorem Ipssum',
        abbreviation: 'TEST_ LOREMIPSUMT3',
        created_at: '2023-03-30T17:39:43.000Z',
        updated_at: '2023-03-30T18:16:48.000Z',
        background_check: false,
      },
    },
    siteleads: [
      {
        id: 2167,
        type: 0,
        employee_id: 45,
        employee: {
          id: '45',
          legal_first_name: 'Test ',
          legal_middle_name: null,
          legal_last_name: 'cien',
          user_id: '68',
          truncated_taxpayer_identification_number: '1100',
          check_employee_id: 'emp_dJ16F4TVCI54d630chuU',
          check_payment_method: 'direct_deposit',
          workbright_employee_id: '84',
          w2_electronic_consent: false,
        },
      },
    ],
    tags: [
      {
        id: '1',
        name: 'Football',
      },
    ],
  },
  areas: [
    {
      id: 87,
      name: 'test Area 1',
      arealeads: [
        // id employee area lead
        {
          id: 2169,
          type: 1,
          employee_id: 2,
          employee: {
            id: '2',
            legal_first_name: 'Mary',
            legal_middle_name: 'Laci',
            legal_last_name: 'Motley',
            user_id: '2',
            truncated_taxpayer_identification_number: '9845',
            check_employee_id: 'emp_0k9n8yXlfB11WH7SWSxN',
            check_payment_method: 'direct_deposit',
            workbright_employee_id: null,
            w2_electronic_consent: false,
          },
        },
      ],
      stands: [
        {
          id: 704,
          name: 'Stand 1',
          positions: [
            // Positions ids
            {
              stand_id: 704,
              position_id: 2,
              total: 10,
              position: {
                id: 2,
                name: 'Beertender',
              },
              employeeIds: [1, 2],
            },
            {
              stand_id: 704,
              position_id: 7,
              total: 10,
              position: {
                id: 7,
                name: 'test',
              },
              employeeIds: [3, 4],
            },
            {
              stand_id: 704,
              position_id: 9,
              total: 10,
              position: {
                id: 9,
                name: 're',
              },
              employeeIds: [5, 6],
            },
            {
              stand_id: 704,
              position_id: 3,
              total: 2,
              position: {
                id: 3,
                name: 'Food Attendant',
              },
              employeeIds: [],
            },
          ],
          standleads: [
            {
              id: 2170,
              type: 3,
              employee_id: 1,
              employee: {
                id: '1',
                legal_first_name: 'Deven',
                legal_middle_name: 'Kale',
                legal_last_name: 'Jahnke',
                user_id: '1',
                truncated_taxpayer_identification_number: '3524',
                check_employee_id: 'emp_0k9n8yXlfB11WH7SWSxN',
                check_payment_method: 'manual',
                workbright_employee_id: null,
                w2_electronic_consent: false,
              },
            },
          ],
        },
        {
          id: 707,
          name: 'Stand 2',
          positions: [
            {
              stand_id: 707,
              position_id: 3,
              total: 10,
              position: {
                id: 3,
                name: 'Food Attendant',
              },
              employeeIds: [],
            },
          ],
          standleads: [],
        },
        {
          id: 708,
          name: 'Stand 3',
          positions: [],
          standleads: [],
        },
      ],
    },
  ],
  positions: [
    {
      id: 1,
      name: 'Area leader',
      total: 40,
      completed: 0,
    },
    {
      id: 2,
      name: 'Food Attendant',
      total: 40,
      completed: 0,
    },
    {
      id: 3,
      name: 'Test - Position',
      total: 40,
      completed: 0,
    },
    {
      id: 4,
      name: 'test',
      total: 40,
      completed: 0,
    },
  ],
  employees: [
    {
      id: 415,
      type: 4,
      employee_id: 1,
      employee: 'Deven Kale Jahnke',
      area: 1,
      stand: 1,
      jobPosition: {
        id: 1,
        name: 'Area leader',
      },
      checkedStatus: 'check-out',
      phoneNumber: '+1234567890',
      checkedTime: {
        check_in: '2023-03-30T12:16:48.000Z',
        check_out: '2023-03-30T18:16:48.000Z',
      },
    },
    {
      id: 416,
      type: 4,
      employee_id: 2,
      employee: 'Mary Laci Motley',
      area: 2,
      stand: 2,
      jobPosition: {
        id: 1,
        name: 'Area leader',
      },
      checkStatus: 'check-out',
      phoneNumber: '+1234567890',
      status: 'registered',
      checkTime: {
        check_in: '2023-03-30T18:16:48.000Z',
        check_out: '2023-03-30T18:16:48.000Z',
      },
    },
    {
      id: 417,
      type: 4,
      employee_id: 3,
      employee: 'Jonh Doe',
      area: 3,
      stand: 3,
      jobPosition: {
        id: 1,
        name: 'Area leader',
      },
      checkStatus: 'check-out',
      status: 'not-registered',
      checkTime: {
        check_in: '2023-03-30T18:16:48.000Z',
        check_out: '2023-03-30T18:16:48.000Z',
      },
    },
    {
      id: 418,
      type: 4,
      employee_id: 4,
      employee: 'Mary Laci Motley',
      area: 4,
      stand: 4,
      jobPosition: {
        id: 1,
        name: 'Area leader',
      },
      checkStatus: 'check-out',
      phoneNumber: '+1234567890',
      status: 'not-registered',
      checkTime: {
        check_in: '2023-03-30T18:16:48.000Z',
        check_out: '2023-03-30T18:16:48.000Z',
      },
    },
    {
      id: 419,
      type: 5,
      employee_id: 3,
      employee: 'Steve Smith',
      area: 5,
      stand: 5,
      jobPosition: {
        id: 1,
        name: 'Area leader',
      },
      checkStatus: 'check-out',
      phoneNumber: '+1234567890',
      status: 'registered',
      checkTime: {
        check_in: '2023-03-30T18:16:48.000Z',
        check_out: '2023-03-30T18:16:48.000Z',
      },
    },
    {
      id: 420,
      type: 4,
      employee_id: 6,
      employee: 'Clara Smith',
      area: 7,
      stand: 7,
      jobPosition: {
        id: 1,
        name: 'Area leader',
      },
      checkStatus: 'check-out',
      phoneNumber: '+1234567890',
      status: 'registered',
      checkTime: {
        check_in: '2023-03-30T18:16:48.000Z',
        check_out: '2023-03-30T18:16:48.000Z',
      },
    },
  ],
};