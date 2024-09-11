// Interface cho User
export interface User {
    id: string;
    createdAt: string; // DateTime được lưu trữ dưới dạng string (ISO 8601)
    updatedAt: string;
    user_name: string;
    display_name: string;
    avatar_type: Avatar; // Avatar enum sẽ được định nghĩa riêng
    avatar_value?: string;
    bio: string;
    isProfileCustomized: boolean;
    following: Friendship[]; // Liên kết nhiều
    follower: Friendship[];
    Thread: Thread[];
    Like: Like[];
  }
  
  // Enum Avatar cho avatar_type
  export enum Avatar {
    File = 'File',
    Url = 'Url',
    Default = 'Default',
  }
  
  // Interface cho Friendship
  export interface Friendship {
    id: string;
    createdAt: string;
    activity_read: boolean;
    user_to_be_followed_id: string;
    user_requested_to_follow_id: string;
  }
  
  // Interface cho Thread
  export interface Thread {
    id: string;
    createdAt: string;
    author_id: string;
    attachment?: string;
    content: string;
    Like: Like[]; // Liên kết nhiều
  
    // reply-type thread
    reply_to_id?: string; // Nullable
    replied_by?: Thread[]; // Quan hệ ngược lại (nhiều replies)
  
    // repost-type thread
    repost_from_id?: string; // Nullable
    reposts?: Thread[]; // Quan hệ ngược lại (nhiều reposts)
  }
  
  // Interface cho Like
  export interface Like {
    id: string;
    thread_id: string; // Liên kết với Thread
    user_id: string; // Liên kết với User
  }
  