json.extract! post, :id, :subject, :message, :rank, :created_at, :updated_at
json.url post_url(post, format: :json)
