export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      analytics: {
        Row: {
          id: string
          metadata: Json | null
          metric_name: string
          timestamp: string
          value: number
        }
        Insert: {
          id?: string
          metadata?: Json | null
          metric_name: string
          timestamp?: string
          value: number
        }
        Update: {
          id?: string
          metadata?: Json | null
          metric_name?: string
          timestamp?: string
          value?: number
        }
        Relationships: []
      }
      events: {
        Row: {
          category: Database["public"]["Enums"]["event_category"]
          created_at: string
          created_by: string
          description: string
          event_date: string
          id: string
          location: string | null
          max_participants: number | null
          participants: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          category: Database["public"]["Enums"]["event_category"]
          created_at?: string
          created_by: string
          description: string
          event_date: string
          id?: string
          location?: string | null
          max_participants?: number | null
          participants?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          category?: Database["public"]["Enums"]["event_category"]
          created_at?: string
          created_by?: string
          description?: string
          event_date?: string
          id?: string
          location?: string | null
          max_participants?: number | null
          participants?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      messages: {
        Row: {
          content: string
          created_at: string
          id: string
          message_type: string | null
          post_id: string
          sender_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          message_type?: string | null
          post_id: string
          sender_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          message_type?: string | null
          post_id?: string
          sender_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      moderation_logs: {
        Row: {
          action_type: string
          admin_id: string
          id: string
          post_id: string | null
          reason: string | null
          timestamp: string
        }
        Insert: {
          action_type: string
          admin_id: string
          id?: string
          post_id?: string | null
          reason?: string | null
          timestamp?: string
        }
        Update: {
          action_type?: string
          admin_id?: string
          id?: string
          post_id?: string | null
          reason?: string | null
          timestamp?: string
        }
        Relationships: [
          {
            foreignKeyName: "moderation_logs_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      organizations: {
        Row: {
          contact_info: Json | null
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          location: string | null
          name: string
          type: Database["public"]["Enums"]["organization_type"]
          updated_at: string
          verified: boolean | null
        }
        Insert: {
          contact_info?: Json | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          location?: string | null
          name: string
          type: Database["public"]["Enums"]["organization_type"]
          updated_at?: string
          verified?: boolean | null
        }
        Update: {
          contact_info?: Json | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          location?: string | null
          name?: string
          type?: Database["public"]["Enums"]["organization_type"]
          updated_at?: string
          verified?: boolean | null
        }
        Relationships: []
      }
      posts: {
        Row: {
          category: Database["public"]["Enums"]["help_category"]
          created_at: string
          description: string
          id: string
          location: string
          organization_id: string | null
          skills_needed: string[] | null
          status: Database["public"]["Enums"]["post_status"] | null
          title: string
          updated_at: string
          urgency_level: number | null
          user_id: string
        }
        Insert: {
          category: Database["public"]["Enums"]["help_category"]
          created_at?: string
          description: string
          id?: string
          location: string
          organization_id?: string | null
          skills_needed?: string[] | null
          status?: Database["public"]["Enums"]["post_status"] | null
          title: string
          updated_at?: string
          urgency_level?: number | null
          user_id: string
        }
        Update: {
          category?: Database["public"]["Enums"]["help_category"]
          created_at?: string
          description?: string
          id?: string
          location?: string
          organization_id?: string | null
          skills_needed?: string[] | null
          status?: Database["public"]["Enums"]["post_status"] | null
          title?: string
          updated_at?: string
          urgency_level?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          badges: string[] | null
          bio: string | null
          created_at: string
          display_name: string | null
          id: string
          location: string | null
          points: number | null
          profile_picture: string | null
          skills: string[] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          badges?: string[] | null
          bio?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          location?: string | null
          points?: number | null
          profile_picture?: string | null
          skills?: string[] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          badges?: string[] | null
          bio?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          location?: string | null
          points?: number | null
          profile_picture?: string | null
          skills?: string[] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      recommendations: {
        Row: {
          created_at: string
          id: string
          match_score: number | null
          post_id: string
          recommended_helpers: string[] | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          match_score?: number | null
          post_id: string
          recommended_helpers?: string[] | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          match_score?: number | null
          post_id?: string
          recommended_helpers?: string[] | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "recommendations_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      safety_checks: {
        Row: {
          checked_at: string
          id: string
          post_id: string
          review_notes: string | null
          reviewed_by: string | null
          risk_score: number | null
          verification_status:
            | Database["public"]["Enums"]["verification_status"]
            | null
        }
        Insert: {
          checked_at?: string
          id?: string
          post_id: string
          review_notes?: string | null
          reviewed_by?: string | null
          risk_score?: number | null
          verification_status?:
            | Database["public"]["Enums"]["verification_status"]
            | null
        }
        Update: {
          checked_at?: string
          id?: string
          post_id?: string
          review_notes?: string | null
          reviewed_by?: string | null
          risk_score?: number | null
          verification_status?:
            | Database["public"]["Enums"]["verification_status"]
            | null
        }
        Relationships: [
          {
            foreignKeyName: "safety_checks_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_role: {
        Args: { _user_id: string }
        Returns: Database["public"]["Enums"]["user_role"]
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["user_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      event_category:
        | "health"
        | "entrepreneurship"
        | "accessibility"
        | "eco"
        | "training"
        | "workshop"
      help_category:
        | "education"
        | "food"
        | "health"
        | "shelter"
        | "volunteering"
        | "mental_wellness"
        | "entrepreneurship"
        | "eco_action"
      organization_type: "ngo" | "donor" | "volunteer_group"
      post_status: "open" | "in_progress" | "closed"
      user_role: "user" | "volunteer" | "admin"
      verification_status: "pending" | "approved" | "rejected"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      event_category: [
        "health",
        "entrepreneurship",
        "accessibility",
        "eco",
        "training",
        "workshop",
      ],
      help_category: [
        "education",
        "food",
        "health",
        "shelter",
        "volunteering",
        "mental_wellness",
        "entrepreneurship",
        "eco_action",
      ],
      organization_type: ["ngo", "donor", "volunteer_group"],
      post_status: ["open", "in_progress", "closed"],
      user_role: ["user", "volunteer", "admin"],
      verification_status: ["pending", "approved", "rejected"],
    },
  },
} as const
