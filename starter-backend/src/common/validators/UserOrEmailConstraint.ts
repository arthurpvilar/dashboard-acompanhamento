import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'UserOrEmail', async: false })
export class UserOrEmailConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const object = args.object as any;
    return !!(object.userId || object.email);
  }

  defaultMessage(args: ValidationArguments) {
    return 'Either userId or email must be provided.';
  }
}
