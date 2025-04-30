import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(1, { message: "Company name is required." }),
  website: z
    .string()
    .url({ message: "Please enter a valid URL." })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  formType?: "demo" | "signup" | "contact";
  onSubmitSuccess?: () => void;
}

const ContactForm = ({
  formType = "demo",
  onSubmitSuccess,
}: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      website: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In a real implementation, you would send the data to your API
      // const response = await fetch('https://api.ezshopper.com/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      //
      // if (!response.ok) throw new Error('Failed to submit form');

      setSubmitStatus("success");
      form.reset();
      if (onSubmitSuccess) onSubmitSuccess();
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An unexpected error occurred",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFormTitle = () => {
    switch (formType) {
      case "demo":
        return "Book a Demo";
      case "signup":
        return "Sign Up";
      case "contact":
        return "Contact Us";
      default:
        return "Book a Demo";
    }
  };

  const getFormDescription = () => {
    switch (formType) {
      case "demo":
        return "Schedule a personalized demo to see how our AI can transform your Shopify store.";
      case "signup":
        return "Create your account and start boosting your e-commerce performance today.";
      case "contact":
        return "Have questions? Our team is here to help you succeed.";
      default:
        return "Schedule a personalized demo to see how our AI can transform your Shopify store.";
    }
  };

  const getButtonText = () => {
    switch (formType) {
      case "demo":
        return "Request Demo";
      case "signup":
        return "Create Account";
      case "contact":
        return "Send Message";
      default:
        return "Submit";
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg border-t-4 border-t-[#ed2a7b]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{getFormTitle()}</CardTitle>
        <CardDescription>{getFormDescription()}</CardDescription>
      </CardHeader>
      <CardContent>
        {submitStatus === "success" ? (
          <Alert className="bg-green-50 border-green-200">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              {formType === "demo"
                ? "Your demo request has been received. We'll contact you shortly to schedule a time."
                : formType === "signup"
                  ? "Your account request has been submitted. Check your email for next steps."
                  : "Your message has been sent. We'll get back to you soon."}
            </AlertDescription>
          </Alert>
        ) : submitStatus === "error" ? (
          <Alert className="bg-red-50 border-red-200 mb-4">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {errorMessage || "Failed to submit form. Please try again."}
            </AlertDescription>
          </Alert>
        ) : null}

        {submitStatus !== "success" && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Smith" {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Store Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website URL (optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://yourstore.myshopify.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {formType === "demo"
                        ? "What are you interested in?"
                        : "Message"}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={
                          formType === "demo"
                            ? "Tell us about your store and what you're looking to achieve..."
                            : "How can we help you?"
                        }
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-[#ed2a7b] hover:bg-[#d01c69] transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-pulse">Processing...</span>
                  </>
                ) : (
                  <>
                    {getButtonText()}
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </Form>
        )}
      </CardContent>
      <CardFooter className="flex justify-center text-sm text-gray-500 pt-0">
        <div className="flex items-center">
          <Mail className="mr-2 h-4 w-4" />
          <span>
            We respect your privacy and will never share your information.
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ContactForm;
