import { memo } from 'react';
import clsx from 'clsx';
import * as cls from './PaymentContent.module.scss';
import { paymentObj } from '../../../shared/const/payment';
import { PaymentContentSection } from '../../../shared/ui/PaymentContentSection';

interface PaymentContentProps {
    className?: string;
}

export const PaymentContent = memo((props: PaymentContentProps) => {
    const { className } = props;

    return (
        <div className={clsx(cls.PaymentContent, className)}>
            <h2 className={cls.PaymentContent__title}>Способы оплаты</h2>
            <div className={cls.PaymentContent__inner}>
                {paymentObj.paymentContent.map((item) => (
                    <PaymentContentSection
                        key={item.src}
                        text={item.text}
                        src={item.src}
                        alt={item.alt}
                    />
                ))}
            </div>
        </div>
    );
});
