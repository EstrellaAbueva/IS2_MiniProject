﻿
// This file was auto-generated by ML.NET Model Builder. 

using MLModel1_ConsoleApp1;

Console.WriteLine("Using model to make single prediction -- Comparing actual Col1 with predicted Col1 from sample data...\n\n");

//request input from user
Console.WriteLine("Enter a sentence to be analyzed: ");
string? input = Console.ReadLine();

// Create single instance of sample data from first line of dataset for model input
MLModel1.ModelInput sampleData = new MLModel1.ModelInput()
{
    Col0 = @input,
};

// Make a single prediction on the sample data and print results
var predictionResult = MLModel1.Predict(sampleData);

Console.WriteLine($"\n\nPredicted Col1: {predictionResult.PredictedLabel}\n\n");
Console.WriteLine("=============== End of process, hit any key to finish ===============");
Console.ReadKey();

