﻿
// This file was auto-generated by ML.NET Model Builder. 

using SentimentAnalysisTrigrams;

// Create single instance of sample data from first line of dataset for model input

Console.WriteLine("Using model to make single prediction -- Comparing actual Col1 with predicted Col1 from sample data...\n\n");

//ask input from user  
Console.Write("Enter the text to be analyzed for sentiment: ");
string input = Console.ReadLine();

MLModel2.ModelInput sampleData = new MLModel2.ModelInput()
{
    Col0 = @input,
};

var sortedScoresWithLabel = MLModel2.PredictAllLabels(sampleData);
Console.WriteLine();
Console.WriteLine($"{"Class",-40}{"Score",-20}");
Console.WriteLine($"{"-----",-40}{"-----",-20}");

foreach (var score in sortedScoresWithLabel)
{
    Console.WriteLine($"{score.Key,-40}{score.Value,-20}");
}

//get highest score
var highestScore = sortedScoresWithLabel.First();
Console.WriteLine();
Console.WriteLine($"The sentiment is: {highestScore.Key}");

Console.WriteLine("=============== End of process, hit any key to finish ===============");
Console.ReadKey();

