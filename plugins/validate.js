import { extend } from 'vee-validate';
import {
    required,
    alpha,
    numeric,
    email,
    min,
    max
} from 'vee-validate/dist/rules';

extend('required', {
    ...required,
    message: 'Поле обязательно к заполнению'
});

extend('alpha', {
    ...alpha,
    message: 'Это поле должно содержать только буквенные символы'
});

extend('numeric', {
    ...numeric,
    message: 'Это поле должно состоять только из чисел.'
});

extend('email', {
    ...email,
    message: 'Адрес электронной почты должен содержать символ "@"'
});

extend('min', {
    ...min,
    message: 'Длина проверяемого поля должна быть не меньше указанной длины.'
});

extend('max', {
    ...max,
    message: 'Длина проверяемого поля не может превышать указанную длину.'
});
