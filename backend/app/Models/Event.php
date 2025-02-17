<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'eventDate', 'organizerId'];
    /**
     * Cast des attributs en objets DateTime.
     */
    protected $casts = [
        'eventDate' => 'datetime',
    ];
    // Relations
    public function organizer()
    {
        return $this->belongsTo(User::class, 'organizerId');
    }

    public function clues()
    {
        return $this->hasMany(Clue::class);
    }

    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }

    public function participants()
{
    return $this->belongsToMany(User::class, 'event_user')
                ->withPivot('status') // Pour accéder au statut
                ->withTimestamps();
}

    
    // Méthodes pour gérer les indices
    public function addClue($content)
    {
        return $this->clues()->create(['content' => $content]);
    }

    public function editClue($clueId, $content)
    {
        $clue = $this->clues()->find($clueId);
        $clue->content = $content;
        $clue->save();
    }
}

