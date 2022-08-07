export const handleInput = (name: string, event: any, setter: any, data: any) => {
    setter({ ...data, [name]: event.target.value })
}
