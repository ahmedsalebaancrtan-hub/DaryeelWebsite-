import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long"),

    needId: z.string().min(1, "Item is required"),

    quantity: z.coerce
        .number()
        .int("Quantity must be a whole number")
        .min(1, "Quantity must be at least 1"),
});

function ContributionForm({ needs, onNewPledge }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            needId: "",
            quantity: 1,
        },
    });


    const onSave = (data) => {
        console.log("Form data:", data);
        onNewPledge(data);

        // Send data to your backend here
        // Example:
        // fetch("/api/contributions", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        // });

        reset();
    };

    return (
        <form
            className="contribution-form"
            onSubmit={handleSubmit(onSave)}
        >
            <h2>Make a Pledge</h2>

            {/* Name */}
            <div className="form-field">
                <label htmlFor="name">Your Name</label>

                <input
                    id="name"
                    type="text"
                    {...register("name")}
                />

                {errors.name && (
                    <p className="field-error">
                        {errors.name.message}
                    </p>
                )}
            </div>

            {/* Item */}
            <div className="form-field">
                <label htmlFor="needId">Item Name</label>

                <select
                    id="needId"
                    {...register("needId")}
                >
                    <option value="">Select an item</option>

                    {needs?.map((need) => (
                        <option
                            key={need.id}
                            value={need.id}
                        >
                            {need.name}
                        </option>
                    ))}
                </select>

                {errors.needId && (
                    <p className="field-error">
                        {errors.needId.message}
                    </p>
                )}
            </div>

            {/* Quantity */}
            <div className="form-field">
                <label htmlFor="quantity">How many?</label>

                <input
                    id="quantity"
                    type="number"
                    inputMode="numeric"
                    min="1"
                    {...register("quantity")}
                />

                {errors.quantity && (
                    <p className="field-error">
                        {errors.quantity.message}
                    </p>
                )}
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="pledge-button"
            >
                Add
            </button>
        </form>
    );
}

export default ContributionForm;