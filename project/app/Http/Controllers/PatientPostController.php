<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PatientPostController extends Controller{
    public function formSubmitOld(Request $request){
        $validatedData = $request->validate([
            'id' => 'nullable',
            'email' => 'nullable',
            'first_name' => 'nullable',
            'last_name' => 'nullable',
            'date_of_birth' => 'nullable',
            'address' => 'nullable',
            'contact_number' => 'nullable',
            'email_verified_at' => 'nullable',
            'password' => 'nullable',
            'remember' => 'nullable',
            'timestamps' => 'nullable'
        ]);
        return json_encode($validatedData);
    }

    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function formsubmit(Request $request)
    {
    	return response()->json([$request->all()]);
    }

}
