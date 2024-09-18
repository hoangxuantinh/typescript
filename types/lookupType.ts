type UserInfo = {
    id: number
    personal: {
        title: string
        email: string
        phone: string
        address: string
        role: {
            name: string
            description: string
        }[]
    },
    payment: {
        creditCardToken: string
    }
}

type PaymentType = UserInfo['payment']
type Role = UserInfo['personal']['role'][0]

export function getPayment(): PaymentType {
    return {
        creditCardToken: '#$%#$%#%$#$^#'
    }
}