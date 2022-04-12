<?php

namespace Botble\Payment\Services\Gateways;

use Botble\Payment\Enums\PaymentMethodEnum;
use Botble\Payment\Enums\PaymentStatusEnum;
use Botble\Payment\Services\Traits\PaymentTrait;
use Botble\Support\Services\ProduceServiceInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CodPaymentService implements ProduceServiceInterface
{
    use PaymentTrait;

    /**
     * @param Request $request
     * @return mixed|void
     */
    public function execute(Request $request)
    {
        $chargeId = Str::upper(Str::random(10));

        $this->storeLocalPayment([
            'amount' => $request->input('amount'),
            'currency' => $request->input('currency'),
            'charge_id' => $chargeId,
            'order_id' => $request->input('order_id'),
            'payment_channel' => PaymentMethodEnum::COD,
            'status' => PaymentStatusEnum::PENDING,
        ]);

        return $chargeId;
    }
}
