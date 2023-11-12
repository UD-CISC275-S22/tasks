import React, { useState } from "react";
import { Plan } from "../Interface/Plan";

export function PlanView(): JSX.Element {
    const [plan] = useState<Plan>();
    return <div>{plan}</div>;
}
