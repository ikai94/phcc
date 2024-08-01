import clsx from 'clsx';
import * as cls from './Payment.module.scss';
import { WrapperWidth } from 'shared/ui/WrapperWidth';
import { PaymentContent } from 'widgets/PaymentContent';

interface PaymentProps {
    className?: string;
}

export const Payment = ({ className }: PaymentProps) => {
    return (
        <div id="payment" className={clsx(cls.Payment, className)}>
            <WrapperWidth className={cls.Payment__inner}>
                <h1 className={cls.Payment__backTitle}>Оплата</h1>
                <PaymentContent />
            </WrapperWidth>
        </div>
    );
};
