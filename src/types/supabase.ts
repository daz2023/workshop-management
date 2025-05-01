export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      customers: {
        Row: {
          id: number
          first_name: string
          last_name: string
          email: string
          phone: string
          address: string
          postcode: string
          created_at: string
        }
      }
      vehicles: {
        Row: {
          id: number
          customer_id: number
          make: string
          model: string
          year: number
          vin: string
          registration: string
          created_at: string
        }
      }
      jobs: {
        Row: {
          id: number
          vehicle_id: number
          customer_id: number
          status: "pending" | "in_progress" | "completed" | "cancelled"
          description: string
          created_at: string
          completed_at: string | null
        }
      }
      services: {
        Row: {
          id: number
          job_id: number
          name: string
          cost: number
          created_at: string
        }
      }
      parts: {
        Row: {
          id: number
          name: string
          description: string
          cost: number
          price: number
          stock: number
          created_at: string
        }
      }
      technicians: {
        Row: {
          id: number
          first_name: string
          last_name: string
          email: string
          phone: string
          created_at: string
        }
      }
    }
  }
}
