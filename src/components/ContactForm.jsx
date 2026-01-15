import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3002'

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      console.log('Sending contact form data:', form)

      const response = await fetch(`${API_BASE_URL}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      console.log('Response status:', response.status)

      if (response.ok) {
        const data = await response.json()
        console.log('Email sent successfully:', data)
        setStatus('Message sent successfully!')
        setForm({ name: '', email: '', phone: '', message: '' })
      } else {
        throw new Error(`Failed to send email: ${response.status}`)
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setStatus('Failed to send message via email. Please try contacting us via WhatsApp instead.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
        <input name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
        <input name="phone" type="tel" value={form.phone} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none" />
      </div>

      {status && (
        <div className={`p-3 rounded-lg ${status.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {status}
        </div>
      )}

      <div>
        <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed">
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  )
}
