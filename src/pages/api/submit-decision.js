import nodemailer from "nodemailer"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {
    const formData = req.body
    console.log("formData", formData)

    // Validate required fields
    if (
      !formData.decisionType ||
      !formData.context ||
      !formData.options ||
      !formData.name ||
      !formData.company ||
      !formData.email
    ) {
      return res.status(400).json({ message: "Missing required fields" })
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "email-smtp.ap-south-1.amazonaws.com",
      port: 587,
      secure: false,
      auth: {
        user: "AKIAXA43P4EWNH26GENC",
        pass: "BIjzpDmSHIXwCQMZ5ibVDa4pchztnLKG42UzVn6d2Qw1",
      },
    })

    // Professional email template with proper content management
    const emailContent = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f8f9fa;">
    
    <div style="max-width: 650px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); overflow: hidden;">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 22px; font-weight: 600;">New Decision Submission</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9; font-size: 14px;">OptipickAI Analysis Request</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 30px;">
            
            <!-- Greeting -->
            <p style="margin: 0 0 20px 0; font-size: 16px;">Hi,</p>
            <p style="margin: 0 0 30px 0; color: #555;">A new decision submission has been received and is ready for analysis.</p>
            
            <!-- Decision Overview Section -->
            <div style="margin-bottom: 35px;">
                <h2 style="color: #2c3e50; font-size: 18px; font-weight: 600; margin: 0 0 20px 0; padding-bottom: 8px; border-bottom: 2px solid #e9ecef;">Decision Overview</h2>
                
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <tr>
                        <td style="padding: 12px 15px; background-color: #f8f9fa; border: 1px solid #e9ecef; font-weight: 600; width: 140px; vertical-align: top;">Decision Type:</td>
                        <td style="padding: 12px 15px; background-color: #ffffff; border: 1px solid #e9ecef;">${formData.decisionType}</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 15px; background-color: #f8f9fa; border: 1px solid #e9ecef; font-weight: 600; vertical-align: top;">Urgency Level:</td>
                        <td style="padding: 12px 15px; background-color: #ffffff; border: 1px solid #e9ecef;">
                            <span style="display: inline-block; padding: 4px 12px; border-radius: 15px; font-size: 12px; font-weight: 600; ${
                              formData.urgency === "24-hours"
                                ? "background-color: #fee2e2; color: #dc2626;"
                                : formData.urgency === "48-hours"
                                  ? "background-color: #fef3c7; color: #d97706;"
                                  : "background-color: #dcfce7; color: #16a34a;"
                            }">
                                ${
                                  formData.urgency === "24-hours"
                                    ? "🔥 Within 24 hours"
                                    : formData.urgency === "48-hours"
                                      ? "⚡ 48 hours"
                                      : "📅 3-5 business days"
                                }
                            </span>
                        </td>
                    </tr>
                </table>
            </div>
            
            <!-- Context Section -->
            <div style="margin-bottom: 30px;">
                <h3 style="color: #2c3e50; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Context & Background</h3>
                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #667eea;">
                    <p style="margin: 0; color: #555; line-height: 1.6;">${formData.context.replace(/\n/g, "<br>")}</p>
                </div>
            </div>
            
            <!-- Decision Options Section -->
            <div style="margin-bottom: 30px;">
                <h3 style="color: #2c3e50; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Available Options</h3>
                <div style="background-color: #f0f9ff; padding: 20px; border-radius: 6px; border-left: 4px solid #3b82f6;">
                    <p style="margin: 0; color: #555; line-height: 1.6;">${formData.options.replace(/\n/g, "<br>")}</p>
                </div>
            </div>
            
            <!-- Decision Criteria Section -->
            <div style="margin-bottom: 35px;">
                <h3 style="color: #2c3e50; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Decision Criteria</h3>
                ${
                  formData.criteria.length > 0
                    ? `<div style="background-color: #fefce8; padding: 20px; border-radius: 6px; border-left: 4px solid #eab308;">
                        ${formData.criteria
                          .map(
                            (criteria) => `
                            <div style="display: flex; align-items: center; margin-bottom: 10px; padding: 8px 12px; background-color: #ffffff; border-radius: 4px; border: 1px solid #e5e7eb;">
                                <span style="display: inline-block; width: 6px; height: 6px; background-color: #667eea; border-radius: 50%; margin-right: 12px;"></span>
                                <span style="color: #374151; font-weight: 500;">${criteria}</span>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>`
                    : `<div style="background-color: #f3f4f6; padding: 20px; border-radius: 6px; text-align: center;">
                        <p style="margin: 0; color: #6b7280; font-style: italic;">No specific criteria selected</p>
                    </div>`
                }
            </div>
            
            <!-- Contact Information Section -->
            <div style="margin-bottom: 30px;">
                <h2 style="color: #2c3e50; font-size: 18px; font-weight: 600; margin: 0 0 20px 0; padding-bottom: 8px; border-bottom: 2px solid #e9ecef;">Contact Information</h2>
                
                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; font-weight: 600; width: 100px; vertical-align: top;">Name:</td>
                            <td style="padding: 8px 0; color: #555;">${formData.name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Company:</td>
                            <td style="padding: 8px 0; color: #555;">${formData.company}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Email:</td>
                            <td style="padding: 8px 0;">
                                <a href="mailto:${formData.email}" style="color: #667eea; text-decoration: none; font-weight: 500;">${formData.email}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Phone:</td>
                            <td style="padding: 8px 0; color: #555;">${formData.phone || "Not provided"}</td>
                        </tr>
                    </table>
                </div>
            </div>
            
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f8f9fa; padding: 20px 30px; border-top: 1px solid #e9ecef; text-align: center;">
            <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 13px; font-weight: 600;">OptipickAI Decision Analysis System</p>
            <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                Submitted: ${new Date().toLocaleString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
            </p>
        </div>
        
    </div>
    
</body>
</html>`

    // Email options
    const mailOptions = {
      from: "OptipickAI <noreply@olibr.com>",
      to: "inquiries@optipickai.com",
      subject: `🚀 New Decision Submission - ${formData.decisionType}`,
      html: emailContent,
    }

    // Send email
    console.log("Attempting to send email...")
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent successfully:", info.messageId)

    // Send success response
    res.status(200).json({
      message: "Decision submitted successfully!",
      submissionId: `DEC-${Date.now()}`,
      estimatedResponse:
        formData.urgency === "24-hours"
          ? "24 hours"
          : formData.urgency === "48-hours"
            ? "48 hours"
            : "3-5 business days",
    })
  } catch (error) {
    console.error("Error submitting decision:", error)
    res.status(500).json({
      message: "Failed to submit decision. Please try again.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    })
  }
}
