"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Text } from "lucide-react";

const quoteFormSchema = z.object({
  name: z.string().min(2).max(50),
  address: z.string(),
  email: z.string().email(),
  phone: z.string(),
  request: z.string(),
  propertyType: z.string(),
  hearAboutUs: z.string(),
});

/**
 * @description Quote Form
 * @version 1.0.0
 */
export function QuoteForm() {
  const form = useForm<z.infer<typeof quoteFormSchema>>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      address: "",
      email: "",
      phone: "",
      request: "",
      propertyType: "",
      hearAboutUs: "",
    },
  });

  function onSubmit(values: z.infer<typeof quoteFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("====== values", values);
  }

  return (
    <div className="flex w-full m-5 p-5 justify-center max-w-3xl mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-2/3 gap-3"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name" className="font-bold">
                  Votre Nom
                </FormLabel>

                <FormControl>
                  <Input placeholder="dupont" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="address">Votre adresse</FormLabel>

                <FormControl>
                  <Input
                    placeholder="18 av du Gal de Gaulle 75 005 Paris"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">Votre Email</FormLabel>

                <FormControl>
                  <Input placeholder="dupont@gmail.com" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="phone">Votre Téléphone</FormLabel>

                <FormControl>
                  <Input placeholder="06 12 34 56 78" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="request"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="request">Votre demande</FormLabel>

                <FormControl>
                  <Textarea
                    placeholder="Soyez le plus précis possible svp"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="propertyType"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="propertyType">
                  Votre type de propriété
                </FormLabel>

                <FormControl>
                  <Input placeholder="Pavillon, appartement, ..." {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="hearAboutUs"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="hearAboutUs">
                  Comment nous avez-vous connu ?
                </FormLabel>

                <FormControl>
                  <Input
                    placeholder="Bouche à oreille, internet, ..."
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
