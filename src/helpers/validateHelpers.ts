export const fieldNameCheck = (field: string) => { return Boolean(field.match(/[a-z]/i)) || 'только латиница' }
