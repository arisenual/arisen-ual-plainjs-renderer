export default {
  actions: [{
    account: 'arisen.token',
    name: 'transfer',
    authorization: [{
      actor: '', // use account that was logged in
      permission: 'active',
    }],
    data: {
      from: '', // use account that was logged in
      to: 'peeps',
      quantity: '1.0000 RIX',
      memo: 'UAL works!',
    },
  }],
}
