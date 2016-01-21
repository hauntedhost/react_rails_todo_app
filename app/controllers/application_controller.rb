class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    props = {
      todos: [
        { note: 'grok monads', complete: false },
        { note: 'make more coffee', complete: true },
        { note: 'practice 普通话', complete: false }
      ],
      words: %w[one two three four].map { |n| { name: n, word: word_for(n) }}
    }

    render 'index', locals: { props: props }
  end

  def word
    render json: { name: params[:name], word: word_for(params[:name]) }
  end

  private

  def word_for(name)
    "#{name}-#{words.sample}"
  end

  def words
    [
      'atlanta',
      'atomic',
      'barbara',
      'bazaar',
      'brother',
      'budget',
      'cabaret',
      'capsule',
      'caviar',
      'channel',
      'chapter',
      'circle',
      'cobalt',
      'comrade',
      'condor',
      'crimson',
      'cyclone',
      'darwin',
      'declare',
      'denver',
      'desert',
      'divide',
      'double',
      'editor',
      'educate',
      'edward',
      'effect',
      'electra',
      'emerald',
      'emotion',
      'empire',
      'eternal',
      'evening',
      'exhibit',
      'expand',
      'explore',
      'extreme',
      'ferrari',
      'forget',
      'freedom',
      'friday',
      'genesis',
      'gravity',
      'habitat',
      'hamlet',
      'harlem',
      'helium',
      'holiday',
      'hunter'
    ]
  end
end
